<fieldset class="col-12" id="stage-1">
    <div class="form-group">
        <label for="">Nome</label>
        <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" id="name" />

        @error('name') <span class="alert alert-danger">{{$message}}</span> @enderror
    </div>
    <div class="form-group">
        <label for="">Email</label>
        <input type="email" class="form-control @error('email') is-invlaid @enderror" name="email" id="email" />
        @error('email') <span class="alert alert-danger">{{$message}}</span> @enderror
    </div>
    <div class="form-group">
        <label for="">Telefone</label>
        <input  type="text" class="form-control @error('phone') is-invalid @enderror" name="phone" id="phone" />
        @error('phone') <span class="alert alert-danger">{{$message}}</span> @enderror
    </div>
</fieldset>