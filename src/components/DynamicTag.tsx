import React, { Component } from 'react';
import { Tag } from 'antd';
import '../styles/components/DynaimcTag.scss';
interface MyTagState {
    checked: boolean;
}
interface MyTagProps {
    value: any;
    onChange(checked: boolean,value: any): void;
    onClose(value: any): void;
}
class MyTag extends Component<MyTagProps,MyTagState> {
    static defaultProps: MyTagProps = {
        value: null,
        onChange: () => null,
        onClose: () => null,
    };
    public state: MyTagState = {
        checked: false,
    };
    private onChange = (checked: boolean) => {
        this.props.onChange(checked,this.props.value);
        this.setState({checked});
    }
    private onClose = () => this.props.onClose(this.props.value);
    public render() {
        const { checked } = this.state;
        return (
            <Tag
                closable
                className={'c-tag'+(checked ? ' c-tag-checked': '')}
                onClose={this.onClose}
            >
                <Tag.CheckableTag
                    className='c-tag-checkbox'
                    checked={checked}
                    onChange={this.onChange}
                >{this.props.children}</Tag.CheckableTag>
            </Tag>
        );
    }
}
interface State {
    tags: string[];
    checks: string[];
}
class DynamicTag extends Component<{}, State> {
    public state: State = {
        tags: ['互膜','OpenGL','ARKit','ARCore','VR','Unity'],
        checks: [],
    };
    private onChange = (checked: boolean, tag: string) => {
        const { checks } = this.state;
        this.setState({
            checks: checked ? checks.concat([tag]) : checks.filter((v: string) => v !== tag),
        });
    }
    private onClose = (tag: string) => {
        this.setState({
            checks: this.state.checks.filter((v: string) => v !== tag),
        });
    }
    public render() {
        return (
            <div className="App">
                {this.state.tags.map((v: string) => (
                    <MyTag
                        key={v}
                        value={v}
                        onChange={this.onChange}
                        onClose={this.onClose}
                    >{v}</MyTag>
                ))}
            </div>
        );
    }
}

export default DynamicTag;