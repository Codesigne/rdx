import React from 'react'
import { connect } from 'react-redux'


class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 12
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div>   fule </div>
                <ul class="mdc-list">
                    <li class="mdc-list-item" tabindex="0">
                        <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                                <input type="checkbox" checked= {this.props.filters.fule.diesel.checked}
                                    class="mdc-checkbox__native-control"
                                    id="Diesel" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label for="Diesel">Diesel</label>
                        </div>
                    </li>
                    <li class="mdc-list-item">
                        <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                                <input type="checkbox" checked= {this.props.filters.fule.petrol.checked}
                                    class="mdc-checkbox__native-control"
                                    id="Petrol" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label for="Petrol">Petrol</label>
                        </div>
                    </li>
                    <li class="mdc-list-item">
                        <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                                <input type="checkbox" checked= {this.props.filters.fule.cng.checked}
                                    class="mdc-checkbox__native-control"
                                    id="CNG" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label for="CNG">CNG</label>
                        </div>
                    </li>
                </ul>

                <div>  transmission </div>
                <ul class="mdc-list" >
                    <li class="mdc-list-item">
                        <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                                <input type="checkbox" checked= {this.props.filters.transmission.automatic.checked}
                                    class="mdc-checkbox__native-control"
                                    id="Automatic" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label for="Automatic">Automatic</label>
                        </div>
                    </li>
                    <li class="mdc-list-item">
                        <div class="mdc-form-field">
                            <div class="mdc-checkbox">
                                <input type="checkbox" checked= {this.props.filters.transmission.manual.checked}
                                    class="mdc-checkbox__native-control"
                                    id="Manual" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark"
                                        viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path"
                                            fill="none"
                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                            </div>
                            <label for="Manual">Manual</label>
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

export default connect(mapSateToProps)(Filters)

