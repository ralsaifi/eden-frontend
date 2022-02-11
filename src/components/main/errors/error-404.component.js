import React from 'react';

export class Error404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full h-full flex items-center justify-center flex-col">
                <p className="text-4xl">Unknown page :(</p>
                <p className="mt-4">Could be this page is not implemented yet</p>
            </div>
        );
    }
}