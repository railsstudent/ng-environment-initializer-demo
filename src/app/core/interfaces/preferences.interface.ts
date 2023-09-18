export interface PreferencesHolder {
  preferences: Preferences;
}

export interface Preferences {
  top: {
    backgroundColor: string;
    border: string;
    color: string;
    size: string;
    textAlign: string;
  },
  content: {
    backgroundColor: string;
    border: string;
  },
  label: {
    color: string;
    size: string;
  },
  font: {
    color: string;
    size:  string;
    style: string;
    weight: string;
  }  
}


export interface UserStyles {
  top: {
    backgroundColor: string;
    border: string;
    color: string;
    fontSize: string;
    textAlign: string;
  },
  content: {
    backgroundColor: string;
    border: string;
  },
  label: {
    color: string;
    fontSize: string;
  },
  font: {
    color: string;
    fontSize:  string;
    fontStyle: string;
    fontWeight: string;
  }  
}
