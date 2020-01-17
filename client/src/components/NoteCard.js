import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Navbar } from 'reactstrap';

const NoteCard = (props) => {
    return (
        <div className="d-flex justify-content-center m-3">
            <Card className="w-75">
                <CardHeader tag="h4" className="d-flex justify-content-between">
                    Note
                    <Button className="m-2 btn-danger">X</Button>
                </CardHeader>
                <CardBody>
                    Note from MongoDb goes here
                </CardBody>
                
            </Card>
        </div>
    );
};

export default NoteCard;