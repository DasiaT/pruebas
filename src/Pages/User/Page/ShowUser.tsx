import { Suspense, useState } from "react";
import { IUser, IUserFilters } from "../Interface/IUser";
import MUIDataTable from "mui-datatables";
import columnsUser from "../Tablet/Colums";
import { useGetUserQuery } from "../../../Store/User";
import { ThemeProvider } from "@material-ui/core";
import { stylesTable } from "../../../Components/Componente_Item";

//const apiData = Consulta<IUser[]>("http://localhost:5289/api/Usuarios");


function ShowUser() {

 //const data = apiData.read();
 
  const [query, setQuery] = useState<IUserFilters>({
    username: '',
    password: ''
  });

  const {data} = useGetUserQuery(query);

  return (
    <>
    
      <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={stylesTable}>
      <MUIDataTable 
      title={"Lista de empleados"}
      data={data?.result || []}
      columns={columnsUser}
      />
      </ThemeProvider>
      </Suspense>
    </>
  );
}

export default ShowUser;
