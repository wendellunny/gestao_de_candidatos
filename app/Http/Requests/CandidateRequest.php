<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CandidateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required','string'],
            'email' => ['required_without:phone'],
            'phone' => ['required_without:email'],
            'description' => ['nullable'],
            'password' => ['required','confirmed'],
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Campo obrigatório',
            'confirmed' => 'Campos de senha não coicidem'
        ];
    }
}
