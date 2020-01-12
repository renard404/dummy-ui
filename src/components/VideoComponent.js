import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import AutoScroll from "./AutoScroll";

class VideoComponent extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <AutoScroll />
                    <div className="col-6">
                        <ReactPlayer url="https://www.youtube.com/watch?v=ApXoWvfEYVU" />
                    </div>
                    <div className="col-2">
                        <h3>Form</h3>
                        <h5>Do you like this Content?</h5>
                        <Form>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Yes
                            </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        No
                            </Label>
                                </FormGroup>
                                <FormGroup>
                                    <FormGroup row>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </FormGroup>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className="container">
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                    <h4>text</h4>
                </div>
            </div>
        )
    }
}

export default VideoComponent;