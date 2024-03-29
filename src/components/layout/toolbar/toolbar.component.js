import React from "react";

export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeLink: ''}
    }

    linkClick(linkName) {
        if (this.props.menuClick)
            this.props.menuClick(linkName);
    }

    isLinkActive(link) {
        return this.props.activeLink && this.props.activeLink.value === link.value;
    }

    createHandler(objectType) {
        if (this.props.createHandler) {
            this.props.createHandler(objectType);
        }
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
                            <a className={`toolbar-link ${this.isLinkActive(link) ? 'toolbar-active-link' : ''}`}
                               onClick={() => this.linkClick(link.value)} key={link.value}>
                                <span className="material-icons">{link.iconName}</span>
                                {link.displayValue}
                            </a>
                        );
                    })}
                </div>
                <div className="relative ml-auto">
                    <button className="toolbar-create-button flex gap-1">
                        <span className="material-icons">add</span>
                    </button>
                    <div className="create-options">
                        <div className="create-option-button" onClick={this.createHandler.bind(this, 1)}>Create Container</div>
                        <div className="create-option-button" onClick={this.createHandler.bind(this, 2)}>Create Branch</div>
                        <div className="create-option-button" onClick={this.createHandler.bind(this, 3)}>Create Task</div>
                    </div>
                </div>
            </div>
        );
    }
}