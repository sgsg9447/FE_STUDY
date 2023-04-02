import { useReducer } from "react";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { appFireStore, timeStamp } from "../firebase/config";
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    // isPending,addDoc,error
    case "isPending":
      return { isPending: true, document: null, success: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "deleteDoc":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// 저장할 컬랙션을 인자로 전달함
export const useFirestore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);
  //colRef : 컬랙션의 참조를 요구함
  const colRef = collection(appFireStore, transaction);

  //컬랙션에 문서를 추가함 doc 전달할 데이터가 addDoc의 전달할 인자로 들어감!
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      console.log(docRef);
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };
  //컬랙션에서 문서를 제거함
  const deleteDocument = async (id) => {
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef,id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };
  return { addDocument, deleteDocument, response };
};
