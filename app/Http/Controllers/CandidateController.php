<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateRequest;
use App\Models\AcademicFormation;
use App\Models\ProfessionalExperience;
use App\Models\User;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidates = User::orderBy('id','desc')->get();
        return view('app.content.candidate-list.candidates',compact('candidates'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('app.content.candidate-registration.stages');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CandidateRequest $request)
    {
        $dataForm = $request->validated();
        $user = User::create($dataForm);
        foreach ($request->professional_experience_title as $key => $value) {
            $professionalExperience = [];
            $professionalExperience['title'] = $value;
            $professionalExperience['description'] = $request->professional_experience_description[$key];
            $professionalExperience['initial_date'] = $request->professional_experience_initial_date[$key];
            $professionalExperience['is_current'] = $request->professional_experience_is_current[$key];
            $professionalExperience['final_date'] = $request->professional_experience_final_date[$key];
            $user->professionalExperiences()->create($professionalExperience);
        }

        foreach ($request->academic_formation_title as $key => $value) {
            $academicFormation = [];
            $academicFormation['title'] = $value;
            $academicFormation['description'] = $request->academic_formation_description[$key];
            $academicFormation['initial_date'] = $request->academic_formation_initial_date[$key];
            $academicFormation['is_current'] = $request->academic_formation_is_current[$key];
            $academicFormation['final_date'] = $request->academic_formation_final_date[$key];
            $user->academicFormations()->create($academicFormation);
        }
       
        return redirect()->route('candidate.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $candidate = User::findOrFail($id);
        return view('app.content.candidate-edit.candidate-edit',compact('candidate'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->academicFormations()->delete();
        $user->professionalExperiences()->delete();
        $user->delete();
        return redirect()->back();
    }

    public function destroyAcademicFormation($id){
        $academicFormation = AcademicFormation::find($id);
        $academicFormation->delete();
        return redirect()->back();
    }

    public function destroyProfessionalExperience($id){
        $professionalExperience = ProfessionalExperience::find($id);
        $professionalExperience->delete();

        return redirect()->back();
    }
}
