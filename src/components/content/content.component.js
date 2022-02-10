import React from 'react';

export class Content extends React.Component {
    render() {
        return (
            <div className="p-10">
                <h2 className="text-2xl mb-3">Container list: </h2>
                <div className="overview bg-white shadow-xl">
                    <div className="grid grid-cols-6 auto-cols-auto bg-gray-200 rounded-t">
                        <span className="p-3 px-6 border-sm w-52">Container Name</span>
                        <span className="p-3 px-6 border-sm">Branch Name</span>
                        <span className="p-3 px-6 border-sm">Project</span>
                        <span className="p-3 px-6 border-sm">Status</span>
                        <span className="p-3 px-6 border-sm">Port</span>
                        <span className="p-3 px-6 border-sm">Action</span>
                    </div>
                    <div className="grid grid-cols-6 auto-cols-auto rounded-b border-t border-gray-200">
                        <span className="p-3 px-6 border-sm w-52">GenMasterBE</span>
                        <span className="p-3 px-6 border-sm">feature/2022-02-16_IT-2639_stock_transfer</span>
                        <span className="p-3 px-6 border-sm">Genisys</span>
                        <span className="p-3 px-6 border-sm">Running</span>
                        <span className="p-3 px-6 border-sm">5002</span>
                        <span className="p-3 px-6 border-sm">Menu</span>
                    </div>
                    <div className="grid grid-cols-6 auto-cols-auto rounded-b border-t border-gray-200">
                        <span className="p-3 px-6 border-sm w-52">GenMasterBE</span>
                        <span className="p-3 px-6 border-sm">feature/2022-02-16_IT-2639_stock_transfer</span>
                        <span className="p-3 px-6 border-sm">Genisys</span>
                        <span className="p-3 px-6 border-sm">Running</span>
                        <span className="p-3 px-6 border-sm">5002</span>
                        <span className="p-3 px-6 border-sm">Menu</span>
                    </div>
                </div>
            </div>
        );
    }
}