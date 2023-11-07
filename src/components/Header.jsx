import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
    const logo =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E2wuMryApSg1qFQhiD3fVl-YEFGUlWjSB8BvW48esDeLq3LdVdyYCpI_zLun25cIQx4';
    return (
        <Container>
            <Toolbar
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                    <img src={logo} alt="logo" style={{ width: 80, height: 80, marginRight: 20 }} />
                </div>
            </Toolbar>
        </Container>
    );
};

export default Header;
