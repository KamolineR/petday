const Empresa = require('./cadastro_empresas');
const Cliente = require('./cadastro_clientes');
const Pet = require('./cadastro_pet');
const Porte = require('./porte');
const Agendamento = require('./agendamento');
const AgendamentoServico = require('./agendamento_servico');
const PorteServico = require('./porte_servico');
const Servico = require('./servico');
const Pagamento =  require('./pagamento');

//Cliente (1) - (N) Pet

Cliente.hasMany(Pet, {
    foreignKey: 'cliente_id'
});

Pet.belongsTo(Cliente, {
    foreignKey: 'cliente_id'
});

//Porte (1) - (N) Pet
Porte.hasMany(Pet, {
    foreignKey: 'porte_id'
});

Pet.belongsTo(Porte, {
    foreignKey: 'porte_id'
});

//Cliente (1) - (N) Agendamento
Cliente.hasMany(Agendamento, {
    foreignKey: 'cliente_id'
});

Agendamento.belongsTo(Cliente, {
    foreignKey: 'cliente_id'
});

//Porte (1) - (N) Porte_servico
Porte.hasMany(PorteServico, {
    foreignKey: 'porte_id'
});

PorteServico.belongsTo(Porte, {
    foreignKey: 'porte_id'
});


//Servico (1) - (N) Porte_servico
Servico.hasMany(PorteServico, {
    foreignKey: 'servico_id'
});

PorteServico.belongsTo(Servico, {
    foreignKey: 'servico_id'
});


//Agendamento (1) - (N) Agendamento_servico
Agendamento.hasMany(AgendamentoServico, {
    foreignKey: 'agendamento_id'
});

AgendamentoServico.belongsTo(Agendamento, {
    foreignKey: 'agendamento_id'
});


//Servico (1) - (N) Agendamento_servico
Servico.hasMany(AgendamentoServico, {
    foreignKey: 'servico_id'
})

AgendamentoServico.belongsTo(Servico, {
    foreignKey: 'servico_id'
})

//Pet (1) - (N) Agendamento
Pet.hasMany(Agendamento, {
    foreignKey: 'pet_id'
});

Agendamento.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

//Empresa (1) - (N) Servico
Empresa.hasMany(Servico, {
    foreignKey: 'empresa_id'
});

Servico.belongsTo(Empresa, {
    foreignKey: 'empresa_id'
});

//Agendamento (1) - (1) Pagamento
Agendamento.hasOne(Pagamento, {
    foreignKey: 'agendamento_id'
});

Pagamento.belongsTo(Agendamento, {
    foreignKey: 'agendamento_id'
});

//Porte (N) - (N) Servico
Porte.belongsToMany(Servico, {
    through: PorteServico,
    foreignKey: 'porte_id',
    otherKey: 'servico_id',
    as: 'servicos'
});

Servico.belongsToMany(Porte, {
    through: PorteServico,
    foreignKey: 'servico_id',
    otherKey: 'porte_id',
    as: 'portes'
});

//Agendamento (N) - (N) Servico
Agendamento.belongsToMany(Servico, {
    through: AgendamentoServico,
    foreignKey: 'agendamento_id',
    otherKey: 'servico_id',
    as: 'servicos'
});

Servico.belongsToMany(Agendamento, {
    through: AgendamentoServico,
    foreignKey: 'servico_id',
    otherKey: 'agendamento_id',
    as: 'agendamentos'
});

module.exports = {
  Empresa,
  Cliente,
  Pet,
  Porte,
  Agendamento,
  AgendamentoServico,
  PorteServico,
  Servico,
  Pagamento
};