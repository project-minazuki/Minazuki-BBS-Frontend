import React, {FC, memo, useState} from "react";

import {Button, Row, Col} from 'antd';
import * as api from "../configs/api";
import * as xhr from "../utils/xhr";

import {TestAppProps} from "./container";
import './style/index.scss';

const TestApp: FC<TestAppProps> = memo(({fetchInfo, loggedIn, token, userInfo, setToken}) => {

    const [data, setData] = useState({});

    const send = () => {
        xhr.$testGetMethod().then(res => setData(res)).catch(e => console.log(e));
    }

    const newToken = () => {
        const token = Math.random() * 1000000000;
        setToken(token.toString(16));
    }

    return (
        <div id="test-app" className="test-app-root">
            <Row>
                <Col span={8} className="xhr-test">
                    <div className="text-field">
                        {JSON.stringify(data)}
                    </div>
                    <Button title="Send a Request" onClick={send} type={"primary"}>
                        {api.testGetMethod}
                    </Button>
                </Col>
                <Col span={8} className="saga-test">
                    <div className="text-field">
                        {JSON.stringify(userInfo)} <br/>
                        loggedIn: {loggedIn ? "true" : "false"} <br/>
                        token: {token}
                    </div>
                    <Button title="Fetch My Info" onClick={fetchInfo}>
                        I'm YJSNPI !!
                    </Button>
                </Col>
                <Col span={8} className="token-test">
                    <div className="text-field">
                        Check console and make sure store.subscribe is working. <br />
                        Maybe you should add a console.log first.
                    </div>
                    <Button title="Random a new token" onClick={newToken}>
                        Try a new login
                    </Button>
                </Col>
            </Row>
        </div>
    )
});

export default TestApp;
