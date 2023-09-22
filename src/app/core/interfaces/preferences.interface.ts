export interface PreferencesHolder {
  preferences: UserStyles;
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
