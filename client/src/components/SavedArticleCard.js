import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import Button from './Button';

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
                    <Button className="m-2">Link to URL</Button>
                    <Button className="m-2" onClick={() => props.saveArticles(props.id)}>Save Article</Button>
                </CardBody>
                <CardFooter className="text-muted">NYT</CardFooter>
            </Card>
        </div>
    );
};

export default SavedArticleCard;