import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

const ArticleCard = (props) => {
    return (
        <div className="w-100">
            <Card>
                <CardHeader tag="h4">{props.headline}</CardHeader>
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

export default ArticleCard;