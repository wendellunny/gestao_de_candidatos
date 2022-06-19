@extends('app.app')

@section('content')
<div><a href="{{route('candidate.create')}}" class="btn btn-info">Novo Candidato</a></div>
<table class="table">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>email</th>
            <th>Telefone</th>
            <th>Ações</th>
        </tr>
    </thead> 
    <tbody>
        @foreach ($candidates as $candidate)
            <tr>
                <td>{{$candidate->name}}</td>
                <td>{{$candidate->description}}</td>
                <td>{{$candidate->email}}</td>
                <td>{{$candidate->phone}}</td>
                <td>
                    <a href="{{route('candidate.edit',$candidate->id)}}" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
@endsection