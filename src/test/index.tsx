import React, {FC, memo, useState} from "react";

import {Button, Row, Col} from 'antd';
import * as api from "../configs/api";
import * as xhr from "../utils/xhr";

import {TestAppProps} from "./container";
import './style/index.scss';

const TestApp: FC<TestAppProps> = memo(({fetchInfo, loggedIn, token, userInfo}) => {

    const [data, setData] = useState({});

    const send = () => {
        xhr.$testGetMethod().then(res => setData(res)).catch(e => console.log(e));
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
                <Col span={8}>

                </Col>
            </Row>
        </div>
    )
});

export default TestApp;
