import React from 'react'
import { connect } from 'react-redux'
import {setFilters} from '../store/actions/'
import { bindActionCreators } from 'redux'


class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                fule: {
                    "petrol": {
                        name: "petrol",
                        checked: 1
                    },
                    "diesel": {
                        name: "diesel",
                        checked: 0
                    },
                    "cng": {
                        name: "cng",
                        checked: 1
                    },
                },
                transmission: {
                    "manual": {
                        name: "manual",
                        checked: 1
                    },
                    "automatic": {
                        name: "automatic",
                        checked: 0
                    },
                },
            }
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        console.log("event", event.target);
        console.log("this", this);
        console.log("arguments", arguments);

        // this.setState(




        // )
       
    }


    render() {
        return (
            <div>
                <div>   fule </div>
                <ul className="mdc-list">
                    <li className="mdc-list-item" tabIndex="0">
                        <div className="mdc-form-field">
                            <div className="mdc-checkbox">
                                <input type="checkbox"

                                    checked={this.props.filters.fule.diesel.checked}
                                    onChange={this.handleClick}
                                    className="mdc-checkbox__native-control"
                                    id="Diesel" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="Diesel">Diesel</label>
                        </div>
                    </li>
                    <li className="mdc-list-item">
                        <div className="mdc-form-field">
                            <div className="mdc-checkbox">
                                <input type="checkbox"

                                    checked={this.props.filters.fule.petrol.checked}
                                    onChange={this.handleClick}
                                    className="mdc-checkbox__native-control"
                                    id="Petrol" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="Petrol">Petrol</label>
                        </div>
                    </li>
                    <li className="mdc-list-item">
                        <div className="mdc-form-field">
                            <div className="mdc-checkbox">
                                <input type="checkbox"
                                    checked={this.props.filters.fule.cng.checked}
                                    onChange={this.handleClick}
                                    className="mdc-checkbox__native-control"
                                    id="CNG" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="CNG">CNG</label>
                        </div>
                    </li>
                </ul>

                <div>  transmission </div>
                <ul className="mdc-list" >
                    <li className="mdc-list-item">
                        <div className="mdc-form-field">
                            <div className="mdc-checkbox">
                                <input type="checkbox"
                                    checked={this.props.filters.transmission.automatic.checked}
                                    onChange={this.handleClick}
                                    className="mdc-checkbox__native-control"
                                    id="Automatic" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="Automatic">Automatic</label>
                        </div>
                    </li>
                    <li className="mdc-list-item">
                        <div className="mdc-form-field">
                            <div className="mdc-checkbox">
                                <input type="checkbox"
                                    checked={this.props.filters.transmission.manual.checked}
                                    onChange={this.handleClick}
                                    className="mdc-checkbox__native-control"
                                    id="Manual" />
                                <div className="mdc-checkbox__background">
                                    <svg className="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path className="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div className="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label htmlFor="Manual">Manual</label>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

function mapSateToProps(store) {
    const { filters } = store
    return { filters }
}
function mapDispatchToProps(params) {
    return {
        // dispatch,

    }
    
}
export default connect(mapSateToProps)(Filters)

