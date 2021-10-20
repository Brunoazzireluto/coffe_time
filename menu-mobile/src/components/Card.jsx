import React, {Component} from "react";
import { Card, Col, Row } from "antd";
import 'antd/dist/antd.css';
import './Card.css';

const { Meta } = Card;
export default props => 

                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Card title="Card title" bordered={false}>
                        Card content
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card 
                      cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }>
                            <Meta
                                title="Card title"
                                description="This is the description"
                            />
                      </Card>
                    </Col>
                  </Row>
                </div>
