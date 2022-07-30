import React from "react";
import styled from "styled-components";

type Props = {};

const SelectBox = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedHour, setHour] = React.useState<string>("00");
  const [selectedMinute, setMinute] = React.useState<string>("00");
  const [selectedAmPm, setAmPm] = React.useState<"AM" | "PM" | null>("AM");

  const handleClick = () => {
    // axios
    //   .post("url", {
    //     time: `${
    //       selectedAmPm === "AM"
    //         ? parseInt(selectedHour)
    //         : parseInt(selectedHour) + 12
    //     }:${selectedMinute}`,
    //   })
    //   .then((res) => res.data);
    console.log("click!");
  };
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setHour(value);
    setIsOpen(false);
    console.log(selectedHour);
  };
  const options = [
    "00⬇️",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  return (
    <div style={{ width: "100%" }}>
      <h1>Custom Select/dropdown</h1>
      <h1>Custom Select/dropdown</h1>
      <UlWrapper>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedHour || "00⬇️"}
          </DropDownHeader>
          {isOpen &&
            options.map((option, index) => {
              if (selectedHour === "00⬇️" && option === "00⬇️") return null;
              else
                return (
                  <ListItem
                    onClick={onOptionClicked(option)}
                    key={`${index}`}
                    selected={option === selectedHour}
                  >
                    {option}
                  </ListItem>
                );
            })}
        </DropDownContainer>
      </UlWrapper>
      <button disabled={selectedAmPm === null} onClick={handleClick}>
        제출
      </button>
    </div>
  );
};

export default SelectBox;

const UlWrapper = styled("div")`
  height: 150px;

  display: inline-block;

  overflow: scroll;
`;

const DropDownContainer = styled("ul")`
  display: inline-flex;
  flex-direction: column;

  list-style: none;
  overflow-y: scroll;

  margin: 0 auto;
`;

const DropDownHeader = styled("li")`
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  width: 75px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  font-size: 20px;
  color: #000;

  margin: 0 auto;
  border: 1px solid #b4b4b4;
`;

const ListItem = styled("li")<{ selected: boolean }>`
  width: 75px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  list-style: none;

  background-color: ${(props) => (props.selected ? "gray" : "white")};

  padding: 0;
  margin: 0;
  border: 1px solid #b4b4b4;
`;
