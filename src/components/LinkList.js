import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    links {
      id
      description
      url
    }
  }
`
;


const LinkList = () => {

  const { data } = useQuery(FEED_QUERY);

    return (
      
      <div>
        <h3>
          Lista de Links
        </h3>
        {data && (
          <>
           {data.links.map((link) => (
             <Link key={link.id} link={link} />
           ))}
          </>
       )}
      </div>
   );
};

export default LinkList;