import React from "react";

export class Toolbar extends React.Component {
    state = {activeLink: ''}

    linkClick(linkName) {
        this.setState({activeLink: linkName});
        // TODO: emit the link name value to parent
    }

    componentDidMount() {
        this.setState({activeLink: this.props?.activeLink?.value ?? ''});
    }

    render() {
        return (
            <div className="toolbar">
                <h1 className="text-2xl">Hello Eden!</h1>
                <div className="flex gap-2">
                    {this.props.links?.map(link => {
                        return (
                            <a className={`toolbar-link ${this.state.activeLink === link.value ? 'toolbar-active-link' : ''}`}
                               onClick={() => this.linkClick(link.value)} key={link.value}>{link.displayValue}</a>
                        );
                    })}
                </div>
                <div className="relative ml-auto">
                    <button className="toolbar-create-button">Create</button>
                    <div className="create-options">
                        <div class="create-option-button">Create Container</div>
                        <div class="create-option-button">Create Branch</div>
                        <div class="create-option-button">Create Task</div>
                    </div>
                </div>
            </div>
        );
    }
}