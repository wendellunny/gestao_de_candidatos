<fieldset class="col-12 @if($errors->isEmpty()) d-none @endif" id="stage-2">
    <div id="professional-experience-scope">
        <div id="professional-experience-inputs">
            <h5>Experiência Profissional</h5>
            <div class="form-group">
                <label for=""> Título </label>
                <input type="text" name="professional_experience_title[]" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label for=""> Descrição </label>
                <textarea class="form-control" name="professional_experience_description[]"></textarea>
            </div>
            <div class="form-group">
                <label for=""> Data de Ínicio </label>
                <input type="date" class="form-control" name="professional_experience_initial_date[]">
            </div>
            <div class="form-group">
                <label for=""> Atual </label>
                <input type="checkbox" class="professional_experience_is_current" name="professional_experience_is_current[]" value="1">
                <input type="hidden" class="professional_experience_is_current_hidden" name = "professional_experience_is_current[]" value="0">
            </div>
            <div class="form-group">
                <label for=""> Data Final </label>
                <input type="date" class="form-control" name="professional_experience_final_date[]"/>
            </div>
        </div>
    </div>
    <div id="professional-experience-scope-more">

    </div>
    <button type="button" id="button-add-experience" class="btn btn-warning">Adicionar Mais uma Experiência</button>
    
    <div id="academic-formation-scope">
        <div id="academic-formation-inputs">
            <h5>Formação Acadêmica</h5>
            <div class="form-group">
                <label for=""> Título </label>
                <input type="text" class="form-control" name="academic_formation_title[]" type="text">
            </div>
            <div class="form-group">
                <label for=""> Descrição </label>
                <textarea class="form-control" name="academic_formation_description[]"></textarea>
            </div>
            <div class="form-group">
                <label for=""> Data de Ínicio </label>
                <input type="date" class="form-control" name="academic_formation_initial_date[]">
            </div>
            <div class="form-group">
                <label for=""> Atual </label>
                <input type="checkbox" class="academic_formation_is_current" name="academic_formation_is_current[]" value="1">
                <input type="hidden" value="0" class="academic_formation_is_current_hidden" name = "academic_formation_is_current[]">
            </div>
            <div class="form-group">
                <label for=""> Data Final </label>
                <input type="date" class="form-control" name="academic_formation_final_date[]"/>
            </div>
        </div>
        <div id="academic-formation-scope-more">

        </div>
    </div>
    <button type="button" id="button-add-formation" class="btn btn-warning">Adicionar Mais uma Formação</button>
</fieldset>