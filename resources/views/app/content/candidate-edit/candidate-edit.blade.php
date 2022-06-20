@extends('app.app')

@section('content')
<div>
    <a href="{{route('candidate.index')}}" class="btn btn-primary">Voltar</a>
</div>
<form action="{{route('candidate.update',$candidate->id)}}" method="POST" class="row p-5">@csrf @method('PUT')
    <fieldset class=" col-12" id="stage-1">
        <div class="form-group">
            <label for="">Nome</label>
            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" id="name" value="{{$candidate->name}}" />
            @error('name') <span class="alert alert-danger">{{$message}}</span> @enderror
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control @error('email') is-invlaid @enderror" name="email" id="email" value="{{$candidate->email}}" />
            @error('email') <span class="alert alert-danger">{{$message}}</span> @enderror
        </div>
        <div class="form-group">
            <label for="">Telefone</label>
            <input  type="text" class="form-control @error('phone') is-invalid @enderror" name="phone" id="phone" value="{{$candidate->phone}}" />
            @error('phone') <span class="alert alert-danger">{{$message}}</span> @enderror
        </div>
    </fieldset>

    <fieldset class="col-12  " id="stage-3">
        <div class="form-group">
            <label for="">Usuário</label>
            <input class="form-control @error('user') is-invalid @enderror" name="user" type="text">
            @error('user') <span class="alert alert-danger">{{$message}}</span> @enderror
        </div>
        <div class="form-group">
            <label for="">Senha</label>
            <input class="form-control @error('password') is-invalid @enderror" type="password" name="password">
            @error('password') <span class="alert alert-danger"> {{$message}} </span> @enderror
        </div>
        <div class="form-group">
            <label for="">Confirme a senha</label>
            <input class="form-control"  type="password" name="password_confirmation">
        </div>
    </fieldset>
    <button class="btn btn-primary"> Editar </button>
</form>
<div class="row">
    <h1>Experiências Profissionais</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Data Inicial</th>
                <th>Data Final</th>
                <th>Ações</th>
            </tr>
        </thead> 
        <tbody>
            @foreach ($candidate->professionalExperiences as $professionalExperience)
                <tr>
                    <td>{{$professionalExperience->title}}</td>
                    <td>{{$professionalExperience->description}}</td>
                    <td>{{Carbon\Carbon::parse($professionalExperience->initial_date)->format('d/m/Y')}}</td>
                    <td>{{$professionalExperience->is_current ? 'Atual' : Carbon\Carbon::parse($professionalExperience->final_date)->format('d/m/Y')}}</td>
                    <td>
                        <button class="btn btn-danger" onclick="document.querySelector('#professional_experience_form_delete_{{$professionalExperience->id}}').submit()">Excluir</button>
                        <form method="POST" id="professional_experience_form_delete_{{$professionalExperience->id}}" action="{{route('professional-experience.destroy',$professionalExperience->id)}}">@csrf @method('DELETE')</form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

</div>
<div class="row">
    <h1>Formações Acadêmica</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Data Inicial</th>
                <th>Data Final</th>
                <th>Ações</th>
            </tr>
        </thead> 
        <tbody>
            @foreach ($candidate->academicFormations as $academicFormation)
                <tr>
                    <td>{{$academicFormation->title}}</td>
                    <td>{{$academicFormation->description}}</td>
                    <td>{{Carbon\Carbon::parse($academicFormation->initial_date)->format('d/m/Y')}}</td>
                    <td>{{$academicFormation->is_current ? 'Atual' : Carbon\Carbon::parse($academicFormation->final_date)->format('d/m/Y')}}</td>
                    <td>
                        <button class="btn btn-danger" onclick="document.querySelector('#academic_formation_form_delete_{{$academicFormation->id}}').submit()">Excluir</button>
                        <form method="POST" id="academic_formation_form_delete_{{$academicFormation->id}}" action="{{route('academic-formation.destroy',$academicFormation->id)}}">@csrf @method('DELETE')</form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

</div>

<table>

</table>
@endsection