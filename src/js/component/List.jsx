import React, { useState, useEffect } from "react";

const List = () => {
	const [inputList, setInputList] = useState(["Cars", "Bikes", "Planes"]);
	const [inputValue, setInputValue] = useState("");
	const click = (e) => {
		if (e.key == "Enter" && inputValue !== "") {
			setInputList(inputList.concat(inputValue));
			setInputValue("");
		}
	};
	const deleteTodo = index => {
		setInputList(inputList.filter((item, position) => index != position))
	}
	return (
		<div className="text-center mt-5">
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={(e) => click(e)}
			/>
			<div>
				{inputList.map((item, index) => (
					<li key={index}>
						{item} <span onClick = {() => deleteTodo(index)}>X</span>
					</li>
				))}
			</div>
		</div>
	);
};

export default List;
