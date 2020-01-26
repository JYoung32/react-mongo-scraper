import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import NoteCard from './NoteCard';
import ModalExample from './NoteModal';


const SavedArticleCard = (props) => {
    return (
        <div className="w-100">
            <Card>
                <CardHeader tag="h4" className="d-flex justify-content-between">
                    {props.headline}
                    <Button className="m-2 btn-danger" onClick={() => props.deleteSingleArticle(props.id)}>X</Button>
                </CardHeader>
                <CardBody>
                    <CardText>{props.summary}</CardText>
                    <hr className="my-2" />
                    <NoteCard />
                    <div className="row justify-content-center">
                        <Button className="m-2">Link to URL</Button>
                        <ModalExample className="m-5"/>
                    </div>
                </CardBody>
                <CardFooter className="text-muted">NYT</CardFooter>
            </Card>
        </div>
    );
};

export default SavedArticleCard;