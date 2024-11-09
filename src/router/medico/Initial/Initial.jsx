import React, { useState } from "react";
import { Button, Table, Icon, Label, Menu, MenuItem } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import { useMediaQuery } from 'react-responsive';
import './Initial.css';

const atendimento = [
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },
    { idade: "11", nome: "Evento A", nome: "pedro", endereco: "Rua X, 123", data: "2024-10-12", status: "Pendente" },

];

function Initial() {

    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5;
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    const indexUltimoItem = paginaAtual * itensPorPagina;
    const indexPrimeiroItem = indexUltimoItem - itensPorPagina;
    const atendimentoPaginaAtual = atendimento.slice(indexPrimeiroItem, indexUltimoItem);
    const paginasTotais = Math.ceil(atendimento.length / itensPorPagina);

    const handlePaginaClick = (numeroPagina) => setPaginaAtual(numeroPagina);

    // Calcular quantas linhas extras precisam ser adicionadas
    const linhasExtras = itensPorPagina - atendimentoPaginaAtual.length;
    return (
        <>
            <Header title2={"Atendimento"} />
            <div className="lista-atendimentoRetirar-container">
                {!atendimento.length ? (
                    <div className="array-vazio">
                        <h1>No momento não há doações! </h1>
                    </div>
                ) : isMobile ? (
                    // VERSÃO MOBILE
                    <div className="mobile-table-container">
                        {atendimentoPaginaAtual.map((atendimento) => (
                            <div key={atendimento.id} className="mobile-table-row">
                                <div className="mobile-table-cell">
                                    <strong>ID:</strong> {atendimento.idade}
                                </div>
                                <div className="mobile-table-cell">
                                    <strong>Nome:</strong> {atendimento.nome}
                                </div>
                                <div className="mobile-table-cell">
                                    <strong>Endereço:</strong> {atendimento.endereco}
                                </div>
                                <div className="mobile-table-cell">
                                    <strong>Data:</strong> {atendimento.data}
                                </div>
                                <div className="mobile-table-cell">
                                    <strong>Status:</strong> {atendimento.status}
                                </div>
                                <div className="mobile-table-actions">
                                    <Icon name="pencil" color="yellow" size="large" />
                                    <Icon name="trash alternate outline" color="red" size="large" />
                                </div>
                            </div>
                        ))}

                        {/* Adicionando a navegação para versão mobile */}
                        <Menu pagination color="red" className="nav-pag">
                            <MenuItem
                                as="a"
                                icon
                                onClick={() => handlePaginaClick(Math.max(1, paginaAtual - 1))}
                                disabled={paginaAtual === 1}
                                className="table-row-atendimentoRetirar"
                            >
                                <Icon name="chevron left" />
                            </MenuItem>

                            {[...Array(paginasTotais)].map((_, index) => (
                                <MenuItem
                                    as="a"
                                    key={index + 1}
                                    active={paginaAtual === index + 1}
                                    onClick={() => handlePaginaClick(index + 1)}
                                    color="blue"
                                >
                                    {index + 1}
                                </MenuItem>
                            ))}

                            <MenuItem
                                as="a"
                                icon
                                onClick={() => handlePaginaClick(Math.min(paginasTotais, paginaAtual + 1))}
                                disabled={paginaAtual === paginasTotais}
                                className="table-row-atendimentoRetirar"
                            >
                                <Icon name="chevron right" />
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    // VERSÃO DESKTOP
                    <Table celled stackable>
                        <Table.Header>
                            <Table.Row className="table-row-atendimentoRetirar">
                                <Table.HeaderCell className="table-row-atendimentoRetirar">Idade</Table.HeaderCell>
                                <Table.HeaderCell className="table-row-atendimentoRetirar">Nome</Table.HeaderCell>
                                <Table.HeaderCell className="table-row-atendimentoRetirar">Contato</Table.HeaderCell>
                                <Table.HeaderCell className="table-row-atendimentoRetirar">Endereço</Table.HeaderCell>
                                <Table.HeaderCell className="table-row-atendimentoRetirar">Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body className="table-body-fixed">
                            {atendimentoPaginaAtual.map((atendimento) => (
                                <Table.Row key={atendimento.id}>
                                    <Table.Cell>{atendimento.idade}</Table.Cell>
                                    <Table.Cell>{atendimento.nome}</Table.Cell>
                                    <Table.Cell>{atendimento.endereco}</Table.Cell>
                                    <Table.Cell>{atendimento.data}</Table.Cell>
                                    <Table.Cell>{atendimento.status}</Table.Cell>
                                </Table.Row>
                            ))}

                            {/* Preencher linhas vazias */}
                            {Array.from({ length: linhasExtras }).map((_, index) => (
                                <Table.Row key={`extra-${index}`}>
                                    <Table.Cell colSpan="5" className="empty-row" />
                                </Table.Row>
                            ))}
                        </Table.Body>

                        <Table.Footer className="table-footer-fixed">
                            <Table.Row>
                                <Table.HeaderCell colSpan="5">
                                    <Menu floated="right" pagination>
                                        <MenuItem
                                            as="a"
                                            icon
                                            onClick={() => handlePaginaClick(Math.max(1, paginaAtual - 1))}
                                            className="table-row-atendimentoRetirar"
                                            disabled={paginaAtual === 1}
                                        >
                                            <Icon name="chevron left" />
                                        </MenuItem>

                                        {[...Array(paginasTotais)].map((_, index) => (
                                            <MenuItem
                                                as="a"
                                                key={index + 1}
                                                active={paginaAtual === index + 1}
                                                onClick={() => handlePaginaClick(index + 1)}
                                                color="blue"
                                            >
                                                {index + 1}
                                            </MenuItem>
                                        ))}

                                        <MenuItem
                                            as="a"
                                            icon
                                            onClick={() => handlePaginaClick(Math.min(paginasTotais, paginaAtual + 1))}
                                            className="table-row-atendimentoRetirar"
                                            disabled={paginaAtual === paginasTotais}
                                        >
                                            <Icon name="chevron right" />
                                        </MenuItem>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                )}
                <Link to="/classificacao">
                    <Button type="submit" className="btn-atendimentoRetirar">
                        Classificar
                    </Button>
                </Link>

            </div>
        </>
    )
}

export default Initial;