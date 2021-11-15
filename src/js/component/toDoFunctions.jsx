import React, { useState } from "react";

const AllToDos = () => {
	const [input, setInput] = useState("");

	const [todo, setTodo] = useState([]);

	const handleKeyDown = e => {
		if (e.key == "Enter") {
			if (input.trim() != "") {
				setTodo([...todo, input]);
			}
			setInput("");
		}
	};

	const handleDeleteTask = idtodelete => {
		setTodo(todo => todo.filter((tarea, i) => i !== idtodelete));
	};
	const [isHovering, setIsHovering] = useState(-1);
	// const [xOver, setXOver] = useState(false);
	// const glowUp = () => {
	// 	if (xOver == true) {
	// 		return { boxShadow: "0px 0px 20px 10px #babff5" };
	// 	}
	// };
	return (
		<div className="text-center">
			<h1 className="mainTitle">{`To Do's`}</h1>
			<div className="theFormat">
				<ul className="tasksLists">
					<form onSubmit={e => e.preventDefault()}>
						<input
							className="inputData"
							type="text"
							placeholder="Type here what needs to be done"
							value={input}
							name="text"
							onChange={e => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</form>
					{todo.map((tarea, i) => {
						return (
							<div
								className="eachElement"
								key={i}
								onMouseEnter={() => setIsHovering(i)}
								onMouseLeave={() => setIsHovering(-1)}>
								{" "}
								{tarea}
								<i
									COmo
									hago
									que
									el
									estilo
									de
									glow
									soo
									sea
									par
									una
									X
									// onMouseEnter={() => setXOver(true)}
									// onMouseLeave={() => setXOver(false)}
									// style={glowUp()}
									onClick={() => {
										handleDeleteTask(i);
									}}
									className={
										isHovering === i
											? "fas fa-times"
											: "taskNoHovering"
									}></i>
							</div>
						);
					})}
					<div className="tasksLeftText">
						{todo.length == 1
							? `    ${todo.length} item left`
							: `    ${todo.length} items left`}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default AllToDos;
