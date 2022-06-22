import React from 'react';
import { Address } from './address';
import { Name } from './name';

export const Profile = props => <div>
    <h1>Profile Details</h1>
    <h4>id {props.id}</h4>
    {/* Name */}
    <Name firstName={props.firstName} lastName={props.lastName} middleName={props.middleName} />
    {/* Address */}
    <Address city={props.city} />
</div>