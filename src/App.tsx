import React from 'react';
import { Toolbar, ToolbarItems, ColumnDirective, ColumnsDirective, GridComponent, Page, Inject, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import './App.css';
import data from './dataSource.json';
import { Edit } from '@syncfusion/ej2-react-grids';
//import { BeginEditArgs } from '@syncfusion/ej2-react-grids';

const App: React.FC = () => {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  
  
  
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize:  6}}
        editSettings={editOptions}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          <ColumnDirective field='Name' headerText='Name' width='150' />
          <ColumnDirective field='PhoneNumber' headerText='Phone Number' width='150' />
          <ColumnDirective field='WorkPhone' headerText='Work Phone' width='150' />
          <ColumnDirective field='DOB' headerText='Date of Birth' type='Date' width='150' allowEditing={false} />
          
        </ColumnsDirective>

        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default App;
