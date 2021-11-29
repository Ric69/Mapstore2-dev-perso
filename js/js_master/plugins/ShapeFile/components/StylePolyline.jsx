const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const { Grid, Row, Col } = require('react-bootstrap');
const ColorPicker = require('../../../../MapStore2/web/client/components/style/ColorPicker');
const StyleCanvas = require('./StyleCanvas');
const numberLocalizer = require('react-widgets/lib/localizers/simple-number');
numberLocalizer();
const { NumberPicker } = require('react-widgets');
require('react-widgets/lib/less/react-widgets.less');

class StylePolyline extends React.Component {
    static propTypes = {
        shapeStyle: PropTypes.object,
        selectedLayer: PropTypes.string,
        editStyleParameter: PropTypes.func,
    };

    static defaultProps = {
        shapeStyle: {},
        selectedLayer: '',
        editStyleParameter: () => {},
    };

    render() {
        const layerId = this.props.selectedLayer || '';
        return (
            <Grid fluid>
                <Row>
                    <Col xs={4} style={{ padding: 0 }}>
                        <StyleCanvas
                            style={{ padding: 0, margin: 'auto', display: 'block' }}
                            shapeStyle={this.props.shapeStyle}
                            geomType="Polyline"
                            height={40}
                        />
                    </Col>
                    <Col xs={7}>
                        <Row style={{ marginTop: 7 }}>
                            <Col xs={4}>
                                <ColorPicker
                                    value={this.props.shapeStyle.color}
                                    line={false}
                                    text="Stroke"
                                    onChangeColor={(color) => {
                                        if (color) {
                                            const opacity = color.a || 1;
                                            const newColor = color ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : null;
                                            this.props.editStyleParameter(layerId, { ...this.props.shapeStyle, color: newColor, opacity: opacity });
                                        }
                                    }}
                                />
                            </Col>
                            <Col xs={8} style={{ paddingRight: 0, paddingLeft: 30 }}>
                                <NumberPicker
                                    onChange={(number) => {
                                        this.props.editStyleParameter(layerId, { ...this.props.shapeStyle, weight: number });
                                    }}
                                    min={1}
                                    max={15}
                                    step={1}
                                    value={this.props.shapeStyle.weight}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = StylePolyline;
