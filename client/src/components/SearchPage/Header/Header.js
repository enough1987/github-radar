import React from 'react';
import { PropTypes } from 'prop-types';

import SortAsc from '../SortAsc/SortAsc';
import SortDesc from '../SortDesc/SortDesc';
import FieldSearch from '../FieldSearch/FieldSearch';

const Header = ({ sort, onSearch }) => (
    <thead>
        <tr>
            <th scope="row">#</th>
            <th><label>Name</label>
                <SortAsc sort={ sort } name="name"/>
                <SortDesc sort={ sort } name="name"/>
                <FieldSearch onSearch={ onSearch } name="name"/>
            </th>
            <th><label>URL</label>
                <SortAsc sort={ sort } name="url"/>
                <SortDesc sort={ sort } name="url"/>
                <FieldSearch onSearch={ onSearch } name="url"/>
            </th>
            <th><label>Language</label>
                <SortAsc sort={ sort } name="language"/>
                <SortDesc sort={ sort } name="language"/>
                <FieldSearch onSearch={ onSearch } name="language"/>
            </th>
            <th><label>Description</label>
                <SortAsc sort={ sort } name="desc"/>
                <SortDesc sort={ sort } name="desc"/>
                <FieldSearch onSearch={ onSearch } name="desc"/>
            </th>
            <th><label>Stars</label>
                <SortAsc sort={ sort } name="stars"/>
                <SortDesc sort={ sort } name="stars"/>
            </th>
            <th><label>Forks</label>
                <SortAsc sort={ sort } name="forks"/>
                <SortDesc sort={ sort } name="forks"/>
            </th>
            <th><label>Size</label>
                <SortAsc sort={ sort } name="size"/>
                <SortDesc sort={ sort } name="size"/>
            </th>
            <th><label>Created</label>
                <SortAsc sort={ sort } name="created"/>
                <SortDesc sort={ sort } name="created"/>
                <FieldSearch onSearch={ onSearch } name="created"/>
            </th>
            <th><label>Updated</label>
                <SortAsc sort={ sort } name="updated"/>
                <SortDesc sort={ sort } name="updated"/>
                <FieldSearch onSearch={ onSearch } name="updated"/>
            </th>
        </tr>
    </thead>
);
Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired
};

export default Header;
