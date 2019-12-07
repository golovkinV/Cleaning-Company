@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#addCompany')">
                Оформить заказ
            </button>
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#myCompany')">
                Мои заказы
            </button>
        </div>
    </div>

    <div class="d-flex text-white justify-content-center" style="margin: 20px">
        <div class="p-2" style="width: 85%">
            <div class="d-flex text-white">


                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="addCompany" style="display: none">
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <h3 class="text-dark">Оформление заказа</h3>
                            </div>
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <form class="w-75" method="POST" action="" enctype="multipart/form-data">
        
                                    <!-- НАЧАЛО СКРЫТОЙ ЧАСТИ -->
                                    <div hidden>
                                        <div>
                                            <input id="idOwner"  name="idOwner" type="text" value="{{Auth::user()->id}}" required>
                                        </div>
                                    </div>
                                    <!-- КОНЕЦ СКРЫТОЙ ЧАСТИ -->
        
                                    <div class="form-group row">
                                        <label for="nameCompany" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Ваш адрес
                                        </label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control{{ $errors->has('nameCompany') ? ' is-invalid' : '' }}"
                                                   id="nameCompany" name="nameCompany" placeholder="Адрес"
                                            required autofocus maxlength="50">
                                            @if ($errors->has('nameCompany'))
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('nameCompany') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <label for="descriptionCompany" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Комментарий
                                        </label>
                                        <div class="col-sm-10">
                                            <textarea type="text" id="descriptionCompany" name="descriptionCompany" placeholder="Комментарий"
                                                      class="form-control{{ $errors->has('descriptionCompany') ? ' is-invalid' : '' }}"
                                                      required maxlength="300"></textarea>
                                            @if ($errors->has('descriptionCompany'))
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('descriptionCompany') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <label for="categoryCompany" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Вид услуги
                                        </label>
                                        <div class="col-sm-10">
                                            <select сlass="form-control{{ $errors->has('categoryCompany') ? ' is-invalid' : '' }}"
                                                    id="categoryCompany" name="categoryCompany" placeholder="Категория">
                                                    <option value="1">Комната</option>
                                                    <option value="2">Квартира</option>
                                                    <option value="3">Дом</option>
                                            </select>
                                            @if ($errors->has('categoryCompany'))
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('categoryCompany') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <label for="webSite" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Веб-сайт
                                        </label>
                                        <div class="col-sm-10">
                                            <input type="url" class="form-control{{ $errors->has('webSite') ? ' is-invalid' : '' }}"
                                                   id="webSite" name="webSite" placeholder="https://mySite.com"
                                                   pattern="https://.*" size="30"
                                                   value="https://"
                                                   required maxlength="50"
                                            >
                                            @if ($errors->has('webSite'))
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('webSite') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
        
        
                                    <input type="text" class="form-control" name="imgCompany" hidden value="1">
        
        
                                    <div class="form-group row">
                                        <label for="webSite" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Логотип
                                        </label>
                                        <div class="col-sm-10 text-dark">
                                            <input type="file" name="image" id="image">
                                            @if ($errors->has('image'))
                                                <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('image') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <div class="col-sm-10 offset-sm-2">
                                            <button type="submit" class="btn btn-warning">Отправить запрос на подтверждение</button>
                                        </div>
                                    </div>
        
                                    {{ csrf_field() }}
                                </form>
                            </div>
        
                        </div>

            </div>
        </div>
    </div>
@endsection
