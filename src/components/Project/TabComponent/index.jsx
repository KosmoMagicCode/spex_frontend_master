import React, { useState, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import Manager from 'components/Project/Pipeline_manager';
import Process from 'components/Project/Process';
import Tabs, { Tab, TabPanel } from '+components/Tabs';

const TabContainer = ({ sidebarWidth }) => {
  const [value, setValue] = useState(0);

  const processComponent = useMemo(() => <Process sidebarWidth={sidebarWidth} />, [sidebarWidth]);
  const managerComponent = useMemo(() => <Manager sidebarWidth={sidebarWidth} />, [sidebarWidth]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab label="Builder" />
        <Tab label="Pipeline" />
      </Tabs>
      {value === 0 && (
        <TabPanel value={value} index={0}>
          {processComponent}
        </TabPanel>
      )}
      {value === 1 && (
        <TabPanel value={value} index={1}>
          {managerComponent}
        </TabPanel>
      )}
    </Fragment>
  );
};

TabContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  sidebarWidth: PropTypes.number,
};

export default TabContainer;
