import React from 'react';
import Report from './Report';

class ReportList extends React.Component {

  state = {
    selected: null
  }

  handleClick(r) {
    this.setState({ selected: r });
  }

  render() {
    var self = this;
    var reports = [
      {
        id: 'a',
        form: 'Registration',
        subject: 'Jared Wheeler',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'b',
        form: 'Registration',
        subject: 'June Fleming',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'c',
        form: 'Registration',
        subject: 'Taylor Black',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'd',
        form: 'Registration',
        subject: 'Domingo Potter',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'e',
        form: 'Registration',
        subject: 'Beverly Todd',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'f',
        form: 'Registration',
        subject: 'Tyler Hoffman',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'g',
        form: 'Registration',
        subject: 'Vernon Hines',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'h',
        form: 'Registration',
        subject: 'Brent Graham',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'i',
        form: 'Registration',
        subject: 'Bethany Marshall',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'j',
        form: 'Registration',
        subject: 'Angela Nelson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'k',
        form: 'Registration',
        subject: 'Miranda Johnson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'l',
        form: 'Registration',
        subject: 'Bertha Cummings',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'm',
        form: 'Registration',
        subject: 'Ada Day',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'n',
        form: 'Registration',
        subject: 'Lynn Harrington',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'o',
        form: 'Registration',
        subject: 'Linda Castillo',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'p',
        form: 'Registration',
        subject: 'Clayton Barber',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'q',
        form: 'Registration',
        subject: 'Angelo Cohen',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'r',
        form: 'Registration',
        subject: 'Laura Beck',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 's',
        form: 'Registration',
        subject: 'Rosa James',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 't',
        form: 'Registration',
        subject: 'Howard Wade',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'u',
        form: 'Registration',
        subject: 'Derek Mcgee',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'v',
        form: 'Registration',
        subject: 'Ron Washington',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'w',
        form: 'Registration',
        subject: 'Jan Vargas',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'x',
        form: 'Registration',
        subject: 'Suzanne Armstrong',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'y',
        form: 'Registration',
        subject: 'Steven Murray',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'z',
        form: 'Registration',
        subject: 'Kristine May',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'aa',
        form: 'Registration',
        subject: 'Allen Byrd',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ab',
        form: 'Registration',
        subject: 'Ebony Norton',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ac',
        form: 'Registration',
        subject: 'Benny Bass',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ad',
        form: 'Registration',
        subject: 'Ramiro George',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ae',
        form: 'Registration',
        subject: 'Betty Bishop',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'af',
        form: 'Registration',
        subject: 'Earl Wilson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ag',
        form: 'Registration',
        subject: 'Henry Chandler',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ah',
        form: 'Registration',
        subject: 'Jody Soto',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ai',
        form: 'Registration',
        subject: 'Dominic Harmon',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'aj',
        form: 'Registration',
        subject: 'Winifred Phelps',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ak',
        form: 'Registration',
        subject: 'Wesley Foster',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'al',
        form: 'Registration',
        subject: 'Claudia Brooks',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'am',
        form: 'Registration',
        subject: 'Vicky Brady',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'an',
        form: 'Registration',
        subject: 'Erica Burns',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ao',
        form: 'Registration',
        subject: 'Manuel Ward',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ap',
        form: 'Registration',
        subject: 'Jim Mcguire',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'aq',
        form: 'Registration',
        subject: 'Sabrina Saunders',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ar',
        form: 'Registration',
        subject: 'Lorene Evans',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'as',
        form: 'Registration',
        subject: 'Matthew Woods',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'at',
        form: 'Registration',
        subject: 'Edmund Drake',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'au',
        form: 'Registration',
        subject: 'Jacob Walton',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'av',
        form: 'Registration',
        subject: 'Chelsea Blake',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'aw',
        form: 'Registration',
        subject: 'Dustin Cain',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ax',
        form: 'Registration',
        subject: 'Alan Green',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ay',
        form: 'Registration',
        subject: 'Merle Jenkins',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'az',
        form: 'Registration',
        subject: 'Leroy Torres',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ba',
        form: 'Registration',
        subject: 'Ethel Gibbs',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bb',
        form: 'Registration',
        subject: 'Rachel Gonzalez',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bc',
        form: 'Registration',
        subject: 'Jerry Delgado',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'bd',
        form: 'Registration',
        subject: 'Rickey Holloway',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'be',
        form: 'Registration',
        subject: 'Raymond Price',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bf',
        form: 'Registration',
        subject: 'Lela Cannon',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'bg',
        form: 'Registration',
        subject: 'Elias Warren',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bh',
        form: 'Registration',
        subject: 'Bernard Bowman',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'bi',
        form: 'Registration',
        subject: 'Lorena Vega',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bj',
        form: 'Registration',
        subject: 'Casey Flores',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bk',
        form: 'Registration',
        subject: 'Daniel Arnold',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bl',
        form: 'Registration',
        subject: 'Tyrone Mendoza',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bm',
        form: 'Registration',
        subject: 'Joel Gibson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bn',
        form: 'Registration',
        subject: 'Natalie Sims',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bo',
        form: 'Registration',
        subject: 'Marianne Richards',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bp',
        form: 'Registration',
        subject: 'Laurence Howell',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'bq',
        form: 'Registration',
        subject: 'Alfredo Curtis',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'br',
        form: 'Registration',
        subject: 'Diana Mann',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bs',
        form: 'Registration',
        subject: 'Lois Keller',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bt',
        form: 'Registration',
        subject: 'Joanne Rodriquez',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bu',
        form: 'Registration',
        subject: 'Bradley Hart',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'bv',
        form: 'Registration',
        subject: 'Neil Stokes',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bw',
        form: 'Registration',
        subject: 'Brooke Dixon',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bx',
        form: 'Registration',
        subject: 'Claude Lane',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'by',
        form: 'Registration',
        subject: 'Amelia Christensen',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'bz',
        form: 'Registration',
        subject: 'Ashley Carson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ca',
        form: 'Registration',
        subject: 'Jackie Roy',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cb',
        form: 'Registration',
        subject: 'Craig Crawford',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cc',
        form: 'Registration',
        subject: 'Johnathan Boone',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cd',
        form: 'Registration',
        subject: 'Cindy Yates',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'ce',
        form: 'Registration',
        subject: 'Donna Steele',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cf',
        form: 'Registration',
        subject: 'Pamela Terry',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cg',
        form: 'Registration',
        subject: 'Juana Davidson',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ch',
        form: 'Registration',
        subject: 'Elsie Ross',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ci',
        form: 'Registration',
        subject: 'Tara Carpenter',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cj',
        form: 'Registration',
        subject: 'Edna Larson',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'ck',
        form: 'Registration',
        subject: 'Mack Douglas',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cl',
        form: 'Registration',
        subject: 'Heidi Burke',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'cm',
        form: 'Registration',
        subject: 'Jimmie Mcdonald',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cn',
        form: 'Registration',
        subject: 'Emily Haynes',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'co',
        form: 'Registration',
        subject: 'Angelica Miller',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cp',
        form: 'Registration',
        subject: 'Perry Clarke',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cq',
        form: 'Registration',
        subject: 'Willis Schmidt',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cr',
        form: 'Registration',
        subject: 'Archie Santiago',
        reportedDate: new Date(2017, 10, 10),
        valid: false
      },
      {
        id: 'cs',
        form: 'Registration',
        subject: 'Rudolph Huff',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'ct',
        form: 'Registration',
        subject: 'Shelia Perkins',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cu',
        form: 'Registration',
        subject: 'Henrietta Mckinney',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      },
      {
        id: 'cv',
        form: 'Registration',
        subject: 'Luis Maxwell',
        reportedDate: new Date(2017, 10, 10),
        valid: true
      }
    ].map(function(r) {
      return (
        <Report
          report={r}
          key={r.id}
          select={self.handleClick.bind(self)}
          selected={self.state.selected && self.state.selected.id === r.id}
        />
      )
    });
    return (
      <div>
        <h1>Report list</h1>
        <ul>{reports}</ul>
      </div>
    );
  }
}

export default ReportList;
