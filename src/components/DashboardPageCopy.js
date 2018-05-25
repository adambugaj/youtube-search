import React from 'react';
import { connect } from 'react-redux';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionName: '',
      transactionEuro: 0,
      transactionSum: 0,
      transactionHigh: 0
    }
  }

  onChangeZloty = (e) => {
    const zloty = e.target.value;
    // Validation: replace , to .
    let regex = zloty.replace(/[,]/, '.');
    console.log(regex)
    this.props.dispatch(editTransaction( regex ));
    this.setState(() => ({ transactionSum: regex }));
  };

  onChangeName = (e) => {
    const name = e.target.value;
      this.setState(() => ({ transactionName: name }));
  };

  onChangeEuro = (e) => {
    const euro = e.target.value;
    this.setState(() => ({ transactionEuro: euro }));
  };

// Po zatwierdzeniu przyciskiem submit wysyłamy dane do obiektu
  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.props)
      this.props.onSubmit({
        transactionName: this.state.transactionName,
        transactionEuro: this.state.transactionEuro,
        transactionSum: this.state.transactionSum,
        transactionHigh: (this.state.transactionSum * this.state.transactionEuro).toFixed(2)
      });
    };

// Interfejs aplikacji oraz komponenty material-ui
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title="Zdefiniuj przelicznik walutowy"
            />
            <TextField
              floatingLabelText="wpisz kurs w PLN"
              className="input-group"
              type="text"
              onChange={this.onChangeZloty}
              className="input-group__item"
          />
            <CardHeader
              title="Dodaj transakcję walutową"
            />
            <TextField
                floatingLabelText="wprowadź nazwę transakcji"
                type="text"
                onChange={this.onChangeName}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="wprowadź kwotę w Euro"
                type="text"
                onChange={this.onChangeEuro}
                className="input-group__item"
            />
            <CardActions>
              <FlatButton type="submit" label="Submit" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
        </form>
        <p>Suma wszystkich transakcji: <span>{this.props.transaction.length}</span></p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction
  };
};

export default connect(mapStateToProps)(DashboardPage);
