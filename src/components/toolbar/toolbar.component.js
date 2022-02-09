import React from "react";

export class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar bg-white p-4 flex items-center gap-4 shadow-md">
                <h1 className="text-2xl">Hello Eden!</h1>
                <div className="flex gap-2">
                    <a className="p-2 bg-gray-100 rounded hover:bg-gray-700">Link 1</a>
                    <a className="p-2 bg-gray-100 rounded hover:bg-gray-700">Link 2</a>
                    <a className="p-2 bg-gray-100 rounded hover:bg-gray-700">Link 3</a>
                </div>
            </div>
        );
    }
}