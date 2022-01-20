import React from 'react';

import { 
    Col,
    Card,
    Image,
    Badge,
    Row
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="4">
            <Card
                style={{ flex: 1 }}
                className="shadow-lg--hover shadow border-0 text-center rounded"
            >
                <Card.Body className="py-5">
                    <Row className="justify-content-md-center">
                        <div
                            className="bg-white rounded-circle mb-3 shadow-lg"
                            style={{ width: "100px", height: "100px" }}>
                            <Image
                                src={data.companylogo}
                                width={"100px"}
                                height={"100px"}
                                alt={data.companylogo}
                            />
                        </div>
                    </Row>
                    <Card.Title tag="h5">{data.role}</Card.Title>
                    <Badge bg="secondary">{data.date}</Badge>
                    <Card.Text className="description my-3 text-left">
                        {data.desc}
                        <ul>
                            {data.descBullets
                                ? data.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>;
                                    })
                                : null}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default ExperienceCard;