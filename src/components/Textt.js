
import React, { useState } from 'react';
import { Collapse, Button, Alert } from 'reactstrap';

function Example() {

  return ( 
<div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
    style={{
      marginBottom: '1rem'
    }}
  >
    Toggle
  </Button>
  <Collapse horizontal>
    <Alert
      style={{
        width: '500px'
      }}
    >
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </Alert>
  </Collapse>
</div>
  );
}

export default Example;