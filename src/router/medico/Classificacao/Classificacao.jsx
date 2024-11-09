import React from "react";
import Header from "../../../components/header/Header";
import { Card, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import "./Classificacao.css";


function Classificacao() {
    return (
        <div>
            <Header title2={"Classificação"} />
            <div className="wrapper">
                <div className="content-container">
                    <h1 className="content-header">
                        Descrição da ocorrência
                    </h1>
                    <p className="content-text">
                        Aqui está o texto abaixo do título. Você pode adicionar mais conteúdo conforme necessário.
                    </p>
                </div>
            </div>

            <h1 className="content-header-2">
                Urgências
            </h1>
            <Grid container stackable className="grid-card">
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Card className="card card-1">
                            <Card.Content textAlign="center">
                                <Card.Header>Emêrgencia</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Card className="card card-2">
                            <Card.Content textAlign="center">
                                <Card.Header>Urgente</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Card className="card card-3">
                            <Card.Content textAlign="center">
                                <Card.Header>Pouco Urgente</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Card className="card card-4">
                            <Card.Content textAlign="center">
                                <Card.Header> Não Urgente</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Classificacao;