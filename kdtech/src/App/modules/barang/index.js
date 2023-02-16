import React, { useEffect } from "react";
import Wrapper from "../wrapper";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import Type from "../../redux/type/globalReducer";
import { barang } from "../../dummyData";
import { Box, Button, TextField } from "@mui/material";
import Modal from "../../components/Modal";


const columns = [
  { id: "kode", label: "Kode", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "harga", label: "harga", minWidth: 170 },
  { id: "ukuran", label: "ukuran", minWidth: 170 },
  { id: "android", label: "android", minWidth: 170 },
  { id: "action", label: "action", minWidth: 170 },
];

const Barang = () => {
  const [page, setPage] = React.useState(0);
  const [typeModal, setTypeModal] = React.useState('')
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const stateBarang = useSelector((state) => state.BarangReducer);
  const StatusPageReducer = useSelector((state) => state.StatusPageReducer);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setTypeModal('')
    dispatch({
      type: Type.SET_MODAL_CLOSED,
    });
  };

  const handleOpen = () => {
    dispatch({
      type: Type.SET_MODAL_UP,
    });
  };

  useEffect(() => {
    dispatch({
      type: Type.SET_BARANG,
      data: barang,
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      kode: data.get('kode'),
      name: data.get('name'),
      harga: Number(data.get('harga')),
      ukuran: data.get('ukuran'),
      android: data.get('android'),
    }
    if (data.get('kode')) {
      dispatch({
        type: Type.ADD_BARANG,
        barang: newData
      })
      handleClose()
    }
  }

  return (
    <Wrapper>
      <h2>Daftar Barang</h2>
      {StatusPageReducer.role === "admin" && (
        <Button
          onClick={() => {
            setTypeModal('addBarang')
            handleOpen();
          }}
          style={{
            marginBottom: "20px",
          }}
          variant="contained"
        >
          Tambah barang
        </Button>
      )}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stateBarang?.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        if (column.label === "action") {
                          return (
                            <TableCell>
                              <Button onClick={() => {
                                setTypeModal('addCart')
                                handleOpen();
                              }} variant="contained">Beli</Button>
                            </TableCell>
                          );
                        }
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={stateBarang.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Modal handleClose={handleClose} handleOpen={handleOpen}>
        {
          typeModal === 'addBarang' && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="kode"
            label="kode"
            name="kode"
            autoComplete="kode"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="harga"
            label="harga"
            name="harga"
            autoComplete="harga"
            autoFocus
            type='number'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="ukuran"
            label="ukuran"
            name="ukuran"
            autoComplete="ukuran"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="android"
            label="android"
            name="android"
            autoComplete="android"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
        }
        {
          typeModal === 'addCart' && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="quantity"
            label="quantity"
            name="quantity"
            autoComplete="quantity"
            autoFocus
            type='number'
            defaultValue={1}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
        }
      </Modal>
    </Wrapper>
  );
};

export default Barang;
