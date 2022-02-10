import React from "react";

export class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar bg-white py-4 px-10 flex items-center gap-4 shadow-md">
                <h1 className="text-2xl">Hello Eden!</h1>
                <div className="flex gap-2">
                    <a className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-700 hover:text-gray-100">Containers</a>
                    <a className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-700 hover:text-gray-100">Branches</a>
                    <a className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-700 hover:text-gray-100">Tasks</a>
                </div>
                <button className="ml-auto p-2 bg-gray-700 rounded text-gray-100 shadow-lg">Add</button>
            </div>
        );
    }
}