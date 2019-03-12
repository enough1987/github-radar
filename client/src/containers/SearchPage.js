import React from 'react';
import { PropTypes } from 'prop-types';

export const SortAsc = ({ sort, name }) => (
    <button
      type="button"
      title={ 'sort by ' + name }
      className="link-button"
      onClick={ () => sort(name, 'asc') }>
        <i className="fa fa-sort-up fa-lg"></i>
    </button>
);
SortAsc.propTypes = {
  name: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired
};

export const SortDesc = ({ sort, name }) => (
    <button
      type="button"
      title={ 'sort by ' + name + ' desc' }
      className="link-button"
      onClick={ () => sort(name, 'desc') }>
        <i className="fa fa-sort-down fa-lg"></i>
    </button>
);
SortDesc.propTypes = {
  name: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired
};

export let FieldSearch = ({ name, onSearch }) => (
    <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder={ name }
          name="field_search"
          title="search in this page"
          onChange={ e => onSearch(e, name) }
        />
    </div>
);
FieldSearch.propTypes = {
  name: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export const Header = ({ sort, onSearch }) => (
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

export const Detail = ({ idx, item, onEdit, onDelete }) => {
  const { created, updated, name, forks, stars, size, url, desc, language } = item;
  return (
      <tr>
          <td>{idx + 1}</td>
          <td>{name}</td>
          <td>{url}</td>
          <td>{language}</td>
          <td>{desc}</td>
          <td>{stars}</td>
          <td>{forks}</td>
          <td>{size}</td>
          <td>{created}</td>
          <td>{updated}</td>
      </tr>
  );
};
Detail.propTypes = {
  idx: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};
