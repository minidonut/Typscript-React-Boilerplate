import * as React from 'react';

interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

export class Hello extends React.Component<IProps, any> {
  render() {
    return <h1>Fuck, This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
  }
}
