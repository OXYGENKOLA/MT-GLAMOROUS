import React from 'react';
import cake from '../cake.jpg';
import catering from '../catering.jpg';
import event from '../event.jpg';
import {Card, ListGroup, ListGroupItem, } from 'react-bootstrap';


function Service() {
  return (
    <div className='service' style={{marginBottom:"100px"}}>
              <h1> Our Services: </h1>
        <p>At Mt-Glamourous, we offer lot of services that makes your event a glamorous one.Our services includes:</p>
            
            <ul>
                <li>Catering Services for any kinds of Meal (local or intercontinental dishes)</li>
                <li>cake</li>
                <li>Event decoration</li>        
            </ul>
            
              <div class="row">
                    <div class="col-sm-4">
                        <div class="card card-block">
                  <Card style={{ width: '26rem',  }} >
                              <Card.Img variant="top" src={event } />
                              <Card.Body>
                                <Card.Title>Decoration</Card.Title>
                                <Card.Text>
                                  We have various kinds of Events decorations. just contact us for your choice.
                                </Card.Text>
                              </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroupItem>Email: awwalolajide@gmail.com</ListGroupItem>
                              </ListGroup>
                              <Card.Body>
                                <Card.Link href="#">Order</Card.Link>
                                <Card.Link href="#">Add to Cart</Card.Link>
                              </Card.Body>
                            </Card>
                            </div>  
                      </div>
                
               
                    <div class="col-sm-4">
                        <div class="card card-block">
                  <Card style={{ width: '26rem',  }} >
                              <Card.Img variant="top" src={cake } />
                              <Card.Body>
                                <Card.Title>Birthday Cake</Card.Title>
                                <Card.Text>
                                  We have various kinds of Birthday cakes designs and Flavour. just contact us for your choice.
                                </Card.Text>
                              </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroupItem>#10,000</ListGroupItem>
                              </ListGroup>
                              <Card.Body>
                                <Card.Link href="#">Order</Card.Link>
                                <Card.Link href="#">Add to Cart</Card.Link>
                              </Card.Body>
                            </Card>
                            </div>  
                      </div>
              
                
                    <div class="col-sm-4">
                        <div class="card card-block">
                  <Card style={{ width: '26rem',  }} >
                              <Card.Img variant="top" src={catering } />
                              <Card.Body>
                                <Card.Title>Catering</Card.Title>
                                <Card.Text>
                                  We serve both local and intercontinental meals. just contact us for your choice.
                                </Card.Text>
                              </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroupItem>Email: awwalolajide@gmail.com</ListGroupItem>
                              </ListGroup>
                              <Card.Body>
                                <Card.Link href="#">Order</Card.Link>
                                <Card.Link href="#">Add to Cart</Card.Link>
                              </Card.Body>
                            </Card>
                            </div>  
                      </div>
                </div>
    </div>
  )
  
}
export default Service