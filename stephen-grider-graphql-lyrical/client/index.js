import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
	// this configuration is has to happen to tell it you want to use
	// the id.  Apollo doesn't want to assume that you are using
	// id as the primary key.  This is a caching system... 
	// (dev.appolodata.com/react/cache-updates.html) 
	dataIdFromObject: o => o.id
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={SongList} />
					<Route path="songs/new" component={SongCreate} />
					<Route path="songs/:id" component={SongDetail} />
				</Route>
			</Router>
		</ApolloProvider>
	);
};

ReactDOM.render(
	<Root />,
	document.querySelector('#root')
);
