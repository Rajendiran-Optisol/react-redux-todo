import React, { Component } from 'react';
import { Header, Menu, Segment, Sidebar , Dropdown} from 'semantic-ui-react';
import styles from './Sidebar.module.scss';

class SidebarView extends Component {
    options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
      ]
    render() {
        return (
            <div className={styles.sidebar}>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thin'
                    >
                    <Menu.Item as='a'>
                    <Dropdown text='Dropdown' options={this.options}  />
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Channels
                    </Menu.Item>
                    </Sidebar>

                    <div className={styles.main}>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Header as='h3'>Application Content</Header>
                            </Segment>
                        </Sidebar.Pusher>
                    </div>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default SidebarView;