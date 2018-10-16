import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {State} from 'src/store/State';
import {Device} from '../../models/Device';
import {Paths} from '../../router/Paths';
import {getAllDevices, isAuthenticated} from '../../store/selector';

interface Props {
    isAuthenticated: boolean
    devices: Device[]
}

class HomeComponent extends React.Component<Props> {
    public render() {
        if (this.props.isAuthenticated && this.props.devices.length > 0) {
            return <Redirect to={Paths.DEVICES}/>
        }
        return <Redirect to={Paths.INFO}/>
    }
}

const mapStateToProps = (state: State) => ({
    isAuthenticated: isAuthenticated(state),
    devices: getAllDevices(state)
});

export const Home = connect(mapStateToProps)(HomeComponent);
