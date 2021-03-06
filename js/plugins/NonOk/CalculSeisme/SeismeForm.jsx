import React from 'react';

import { Col, FormGroup, FormControl, Grid, Row } from 'react-bootstrap';
import Message from '@mapstore/I18N/Message';
import CatalogServiceSelector from './CatalogServiceSelector';
import localizeProps from '@mapstore/misc/enhancers/localizedProps';
const SearchInput = localizeProps("placeholder")(FormControl);

export default ({ onSearchTextChange = () => { }, searchText, title = <Message msgId={"catalog.title"} />, catalog, services, isValidServiceSelected, showCatalogSelector}) =>
    ( <Grid className="catalog-form" fluid><Row><Col xs={12}>
        <h4 className="text-center">{title}</h4>
        {showCatalogSelector
            ? (<FormGroup>
                <CatalogServiceSelector servieces={services} catalog={catalog} isValidServiceSelected={isValidServiceSelected}/>
            </FormGroup>) : null}
        <FormGroup controlId="catalog-form">
            <SearchInput type="text" placeholder="catalog.textSearchPlaceholder" value={searchText} onChange={(e) => onSearchTextChange(e.currentTarget.value)}/>
        </FormGroup>
    </Col></Row></Grid>);